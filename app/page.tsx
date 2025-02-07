"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { exerciciosPorTreino } from "./components/ExercicioList"

export default function WorkoutApp() {
  const [selectedTreino, setSelectedTreino] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<{ nome: string; url: string } | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const treinosNomes = Object.keys(exerciciosPorTreino)

  // Filtra os exercícios com base no treino selecionado e na pesquisa
  const filteredExercicios = selectedTreino
    ? exerciciosPorTreino[selectedTreino].filter((exercicio) =>
        exercicio.nome.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const [exercicioTimers, setExercicioTimers] = useState<{ [key: string]: number }>({})  // Armazena os tempos de cada exercício
  const [exercicioStates, setExercicioStates] = useState<{ [key: string]: boolean }>({})  // Armazena o estado (iniciado ou pausado) de cada exercício
  const [totalTime, setTotalTime] = useState(0)  // Tempo total do treino

  const Sidebar = () => (
    <ScrollArea className="h-full">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Treinos</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="lg:hidden">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-2">
          {treinosNomes.map((treino) => (
            <Button
              key={treino}
              variant={selectedTreino === treino ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setSelectedTreino(treino)
                setIsOpen(false)
              }}
            >
              {treino.replace("_", " ")}
            </Button>
          ))}
        </div>
      </div>
    </ScrollArea>
  )

  // Função para iniciar ou pausar o cronômetro de um exercício
  const handleTimerToggle = (nome: string) => {
    if (exercicioStates[nome]) {
      // Se o cronômetro estiver em execução, vamos pausá-lo
      clearInterval(exercicioTimers[nome].interval)
      setExercicioStates((prev) => ({
        ...prev,
        [nome]: false,
      }))
    } else {
      // Se o cronômetro estiver parado, vamos iniciá-lo
      let time = 0;
      const interval = setInterval(() => {
        time += 1;
        setExercicioTimers((prev) => ({
          ...prev,
          [nome]: { time, interval },
        }))
      }, 1000);
      setExercicioStates((prev) => ({
        ...prev,
        [nome]: true,
      }))
    }
  }

  // Atualiza o tempo total do treino com base nos tempos individuais dos exercícios
  useEffect(() => {
    const total = Object.values(exercicioTimers).reduce((acc, curr) => acc + (curr.time || 0), 0)
    setTotalTime(total)
  }, [exercicioTimers])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <div className={`hidden lg:block transition-all duration-300 ${isOpen ? "w-64" : "w-0"}`}>
        <div className="bg-white shadow-lg h-full">
          <Sidebar />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden absolute left-4 top-4">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 p-8 pt-16 lg:pt-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="hidden lg:flex">
              <Menu className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">
              {selectedTreino ? selectedTreino.replace("_", " ") : "Selecione um treino"}
            </h1>
          </div>

          {/* Campo de pesquisa dos exercícios */}
          {selectedTreino && (
            <input
              type="text"
              placeholder="Pesquisar exercício..."
              className="w-full p-2 mb-4 border rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}

          {selectedTreino ? (
            <div className="grid gap-4">
              {filteredExercicios.length === 0 ? (
                <div className="text-gray-500">Nenhum exercício encontrado.</div>
              ) : (
                filteredExercicios.map((exercicio) => (
                  <div key={exercicio.nome} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col flex-1">
                      <span className="font-medium text-lg">{exercicio.nome}</span>
                      <div className="text-sm text-gray-500">{exercicio.descricao}</div>
                    </div>

                    {/* Botões de controle do cronômetro e ver vídeo */}
                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() => handleTimerToggle(exercicio.nome)}
                        variant={exercicioStates[exercicio.nome] ? "destructive" : "primary"}
                        className="w-24"
                      >
                        {exercicioStates[exercicio.nome] ? "Pausar" : "Iniciar"}
                      </Button>

                      {/* Botão de ver vídeo */}
                      <Button
                        onClick={() => setSelectedVideo({ nome: exercicio.nome, url: exercicio.videoUrl })}
                        variant="outline"
                        className="w-24"
                      >
                        Ver Vídeo
                      </Button>

                      <span className="text-sm">{exercicioTimers[exercicio.nome]?.time || 0} s</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500">Selecione um treino para começar</div>
          )}

          {/* Tempo Total */}
          {selectedTreino && filteredExercicios.length > 0 && (
            <div className="mt-6 text-lg font-bold">
              Tempo total do treino: {totalTime} segundos
            </div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedVideo ? `Vídeo: ${selectedVideo.nome}` : "Vídeo do Exercício"}</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="aspect-video relative">
              <video src={selectedVideo.url} controls className="w-full h-full rounded-lg">
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}