import React from 'react';
import ExampleComponent from '../components/ExampleComponent';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Next.js with TypeScript and Tailwind CSS!</h1>
      <ExampleComponent />
    </div>
  );
};

export default Home;