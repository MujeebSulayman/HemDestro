import React from 'react';
import { Header, CreateContainer, MainContainer } from './components';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<AnimatePresence>
			<div className='w-screen h-auto flex flex-col bg-primary'>
				<Header />
				<main className='mt-24 p-6 w-full'>  
					<Routes>
						<Route path='/' element={<MainContainer />} />
						<Route path='/createItem' element={<CreateContainer />} />
					</Routes>
				</main>
			</div>
		</AnimatePresence>
	);
};

export default App;
