// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/workspace-background.png')`,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-700">Start building your amazing project here!</p>
      </div>
    </div>
  );
};

export default Index;
