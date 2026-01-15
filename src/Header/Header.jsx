function Header() {
    return (
        <header className="flex justify-around items-center mt-3">
            <div><h1 className="font-bold text-[3rem]">Task List</h1></div>
            <div>
                <button type="button" className=" p-3 pr-5 pl-5 bg-purple-900 text-white rounded-[10px]">+ Add Task</button>
            </div>
        </header>
    );
}

export default Header;