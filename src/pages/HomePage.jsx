import '../../styles/style.scss'
function HomePage() {
    return(
    <>
    <div className="container">
        <main className='main'>
            <input className='newTodoInput' type="text" placeholder='Add new todo' />
        </main>
    </div>
    </>
    )
}

export default HomePage;