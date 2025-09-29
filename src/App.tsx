import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';


function App() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar activeTab="dashboard" setActiveTab={() => { }} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header title="Dashboard" />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    Main content
                </main>
            </div>
        </div>
    )
}

export default App