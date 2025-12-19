import posterImg from "../../assets/sw-poster.jpg"
import styles from './styles.module.css'

export default function Card() {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={posterImg} alt="Star Wars poster" />
            <div>
                <h2>Pôster do filme Star Wars</h2>
                <p>Um poster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico poster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <button>Comprar agora</button>
            </div>
        </div>
    )
}