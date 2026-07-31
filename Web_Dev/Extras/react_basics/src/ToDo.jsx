function Todo() {
    const callFun = () => {
        alert("Function called");
    }

    return (
        <>
            <h1>Sujeet Oraon Todos</h1>
            <img src={"https://imgs.search.brave.com/zIFyFvRW3I7LcNIeCYHKyZwV_ru1TZzTyikX-p9AWdA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE5/NjA4NzEzOS9waG90/by9kb2ctZ2l2ZXMt/cGF3LXRvLWEtd29t/YW4tbWFraW5nLWhp/Z2gtZml2ZS1nZXN0/dXJlLmpwZz9iPTEm/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZlFp/MmVZV0l0U0pFRUxo/RkMzVVVVM3J0eDhR/ZHVBdXpPODl0ckkw/RXhMVT0"} alt={"Photo of a dog"} className="photo"></img>

            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Imporve the spectrum technology</li>
            </ul>

            <button onClick={callFun}>Click Me</button>
        </>
    )
}

export default Todo;