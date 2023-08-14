import React, { useState } from 'react';

const AddPays = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleOpenPopup = () => {
        setIsVisible(true);
    };

    const handleClosePopup = () => {
        setIsVisible(false);
    };

    return (
        <>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleOpenPopup}
            >
                Ajouter pays
            </button>
            {isVisible && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-4">Ajouter un pays</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block mb-1">Nom</label>
                                <input type="text" className="border border-gray-300 px-3 py-2 w-full" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Indicatif</label>
                                <input type="text" className="border border-gray-300 px-3 py-2 w-full" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Code ISO</label>
                                <input type="text" className="border border-gray-300 px-3 py-2 w-full" />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                Créer
                            </button>
                        </form>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4" onClick={handleClosePopup}>
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddPays;
