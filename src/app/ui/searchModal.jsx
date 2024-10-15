"use client";

import { useState, useEffect, useRef } from "react";
import { Search as SearchIcon } from "lucide-react"; // Import des icônes de Lucide

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);  // Gérer l'ouverture/fermeture du modal
    const [query, setQuery] = useState("");  // Stocker la requête de recherche
    const modalRef = useRef(null);  // Référence pour le modal

    // Ouvrir le modal
    const openModal = () => setIsOpen(true);
    

    // Fermer le modal
    const closeModal = () => {
        setIsOpen(false);
        setQuery("");  // Réinitialiser la recherche
    };
    const hanleclickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";  // Empêcher le défilement de la page
            document.addEventListener("mousedown", hanleclickOutside);
        }
        else{
            document.body.style.overflow = "auto";  // Activer le défilement de la page
            document.removeEventListener("mousedown", hanleclickOutside);
        }
        return () => document.removeEventListener("mousedown", hanleclickOutside);
    }, [isOpen]
    );

    return (
        <>
            {/* Bouton ou champ de recherche */}
            <button
                onClick={openModal}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
                <SearchIcon size={18} /> Rechercher
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 backdrop-blur-md bg-opacity-60 bg-slate-900 flex justify-center pt-24 items-start z-50">
                    <div ref={modalRef} className={`bg-white w-11/12 max-w-xl ${query && "p-4"} rounded-lg shadow-2xl relative`}>

                        {/* Champ de recherche */}
                        <div className="flex justify-between items-center relative">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full p-3 border bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900/5 focus:border-transparent"
                                placeholder="Recherchez quelque chose..."
                            />
                            <SearchIcon size={20} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                        </div>

                        {/* Résultats de recherche simulés */}
                        {query && (
                            <div className="mt-4">
                                <p className="text-sm text-gray-500">Résultats pour : {query}</p>
                                {/* Simuler quelques résultats */}
                                <ul className="mt-2">
                                    <li className="py-2">Résultat 1</li>
                                    <li className="py-2">Résultat 2</li>
                                    <li className="py-2">Résultat 3</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Search;
