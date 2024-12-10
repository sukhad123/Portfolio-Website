
export default function Navbar()
{
    return<div>
        <div className="flex flex-row custom">
            <div   className="basis-1/2 grid justify-items-start"> </div>
            <div className="basis-1/2 grid justify-items-center">
            <a href = "#aboutt">
                <button> About Me</button>

            </a>
            </div>
            <div className="basis-1/2 grid justify-items-center">Projects</div>
            <div className="basis-1/2 grid justify-items-center">Contact</div>
        </div>
    </div>
}