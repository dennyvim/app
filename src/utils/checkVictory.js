/*import cerrar from './assets/cerrar.png'
function donegame(){
    return 
    <aside id="done" class="modal">
    <link to="/HomeClassic"><img src={cerrar} alt="cerrar" class="close-modal"/></link>
    <div class="content-modal">
        <article>
            <h1 id="titulodone">DONE</h1>
            <button id="continuar">Continuar</button>
        </article>
    </div>
</aside>;
}*/
export default (deck) => {
    if(deck.filter((card) => !card.guessed).length === 0)
    {
        alert("Ganaste");
    }
}
