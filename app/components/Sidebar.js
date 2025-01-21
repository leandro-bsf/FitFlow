import { useState } from 'react';
import Modal from 'react-modal';

const Sidebar = ({ setMenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'Treino_Abdomen',
    'Treino_Bicpes',
    'Treino_Costas',
    'Treino_Ombro',
    'Treino_Peito',
    'Treino_Pernas',
    'Treino_Triceps',
  ];

  return (
    <div>
      {/* Botão de Menu (Hamburguer) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-4 text-white bg-blue-600 rounded-md"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 lg:static lg:bg-transparent lg:w-64 w-0 transition-all ${isOpen ? 'w-64' : 'w-0'}`}
      >
        <div className="flex justify-between items-center p-4 lg:hidden">
          <h2 className="text-white font-bold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl"
          >
            ×
          </button>
        </div>
        <ul className="p-4 space-y-2">
          {menuItems.map((item) => (
            <li
              key={item}
              className="text-white cursor-pointer py-2 px-4 hover:bg-gray-700 rounded"
              onClick={() => setMenuItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
