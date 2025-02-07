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
  const [exercicioTimers, setExercicioTimers] = useState<{ [key: string]: number }>({})
  const [runningTimers, setRunningTimers] = useState<{ [key: string]: boolean }>({})
  const [totalTime, setTotalTime] = useState(0)

  const treinosNomes = Object.keys(exerciciosPorTreino)

  useEffect(() => {
    const total = Object.values(exercicioTimers).reduce((acc, time) => acc + time, 0)
    setTotalTime(total)
  }, [exercicioTimers])

  const handleTimerToggle = (nome: string) => {
    if (runningTimers[nome]) {
      setRunningTimers((prev) => ({ ...prev, [nome]: false }))
    } else {
      setRunningTimers((prev) => ({ ...prev, [nome]: true }))
      const interval = setInterval(() => {
        setExercicioTimers((prev) => ({ ...prev, [nome]: (prev[nome] || 0) + 1 }))
      }, 1000)
      setTimeout(() => {
        clearInterval(interval)
        setRunningTimers((prev) => ({ ...prev, [nome]: false }))
      }, 600000) // Limite de 10 minutos por exercício
    }
  }

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

  const filteredExercicios =
    selectedTreino && selectedTreino in exerciciosPorTreino
      ? exerciciosPorTreino[selectedTreino as keyof typeof exerciciosPorTreino].filter((exercicio) =>
          exercicio.nome.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : []

  return (
    <div className="flex h-screen bg-gray-100">
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

      <div className="hidden lg:block w-64 bg-white shadow-lg h-full">
        <Sidebar />
      </div>

      <div className="flex-1 p-8 pt-16 lg:pt-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">
            {selectedTreino ? selectedTreino.replace("_", " ") : "Selecione um treino"}
          </h1>

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
              {filteredExercicios.map((exercicio) => (
                <div key={exercicio.nome} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                  <div className="flex flex-col flex-1">
                    <span className="font-medium text-lg">{exercicio.nome}</span>
                  </div>
                  <div className="flex items-center gap-3">
                  <Button
                    onClick={() => handleTimerToggle(exercicio.nome)}
                    variant={runningTimers[exercicio.nome] ? "destructive" : "default"} // Alterado para "default"
                className="w-24"
                >
                   {runningTimers[exercicio.nome] ? "Pausar" : "Iniciar"}
                  </Button>
                    <Button
                      onClick={() => setSelectedVideo({ nome: exercicio.nome, url: exercicio.videoUrl })}
                      variant="outline"
                      className="w-24"
                    >
                      Ver Vídeo
                    </Button>
                    <span className="text-sm">{exercicioTimers[exercicio.nome] || 0} s</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">Selecione um treino para começar</div>
          )}

          {selectedTreino && filteredExercicios.length > 0 && (
            <div className="mt-6 text-lg font-bold">
              Tempo total do treino: {totalTime} segundos
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedVideo ? `Vídeo: ${selectedVideo.nome}` : "Vídeo do Exercício"}</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <video src={selectedVideo.url} controls className="w-full rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
