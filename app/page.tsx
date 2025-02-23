"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
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
          exercicio.nome.toLowerCase().includes(searchQuery.toLowerCase()),
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
                <div
                  key={exercicio.nome}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="flex flex-col flex-1">
                    <span className="font-medium text-lg">{exercicio.nome}</span>
                  </div>
                  <Button
                    onClick={() => setSelectedVideo({ nome: exercicio.nome, url: exercicio.videoUrl })}
                    variant="outline"
                    className="w-24"
                  >
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

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <DialogHeader className="space-y-3 pb-4">
            <DialogTitle className="text-lg font-semibold">{selectedVideo?.nome}</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="relative aspect-video">
              <video src={selectedVideo.url} controls playsInline className="w-full h-full rounded-lg" />
            </div>
          )}
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  )
}

