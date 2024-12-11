
export default function Navbar()
{
    return  <div className="flex flex-col md:flex-row bg-white shadow-md p-4" style={{ backgroundColor: '#D7D3BF' }}>
    
    <div className="hidden md:block md:basis-1/4"></div>

     
    <div className="w-full md:basis-3/4 flex justify-center md:justify-end space-x-6">
        <a href="#aboutt" className="text-gray-700 hover:text-gray-900 transition">
            <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 w-full md:w-auto">About Me</button>
        </a>
        <a href="#projects" className="text-gray-700 hover:text-gray-900 transition">
            <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 w-full md:w-auto">Projects</button>
        </a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">
            <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 w-full md:w-auto">Contact</button>
        </a>
    </div>
</div>
}