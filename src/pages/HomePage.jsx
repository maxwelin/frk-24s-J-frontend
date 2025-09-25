import { Menu, Board } from "gumoku-component";


export default function HomePage() {

   

    return (
        <div>
            <Board boardTiles={80}>

            <Menu className="menuOverlay"/>

            </Board>
        </div>
    )
}
