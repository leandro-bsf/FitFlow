"use client"

import { useState } from "react"
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

  const treinos = [
    "Treino_Abdomen",
    "Treino_Bicpes",
    "Treino_Costas",
    "Treino_Ombro",
    "Treino_Peito",
    "Treino_Pernas",
    "Treino_Triceps",
  ]

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
          {treinos.map((treino) => (
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
            {/* Desktop Toggle Button */}
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="hidden lg:flex">
              <Menu className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">
              {selectedTreino ? selectedTreino.replace("_", " ") : "Selecione um treino"}
            </h1>
          </div>

          {selectedTreino ? (
            <div className="grid gap-4">
              {exerciciosPorTreino[selectedTreino as keyof typeof exerciciosPorTreino].map((exercicio) => (
                <div key={exercicio.nome} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                  <span className="font-medium">{exercicio.nome}</span>
                  <Button onClick={() => setSelectedVideo({ nome: exercicio.nome, url: exercicio.videoUrl })}>
                    Ver Vídeo
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">Selecione um treino para começar</div>
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

