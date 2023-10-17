import styles from './styles.module.css'
import { formatPriceInEUR } from '../../../../utils/format'
import { useState } from 'react';

export function ArticleItem(props) {

	const { item, addToCart } = props

	const [count, setCount] = useState(1);

	const more = () => {
		setCount(oldState => {
			return oldState + 1
		});
	};
  
	const less = () => {
	  setCount(count - 1);
	};  

	function handleAddtoCart() {
		addToCart(item.id, count)
	}

	return (
		<div className={styles.card} key={item.id}>
			<div className={styles.cardcontent}>
				<img src={item.image} alt={item.name}></img>
				<div className={styles.tags}>
					{item.tag.map((tag) => (
						<span key={tag} className={styles.tag}>
							{tag}
						</span>
					))}
				</div>
			</div>
			<h3 className={styles.name}>{item.name}</h3>
			<p className={styles.description}>{item.description}</p>
			<div className={styles.cardfooter}>
				<span className={styles.price}>
					{formatPriceInEUR(item.price)}
				</span>
				<div className={styles.buttons}>

					<div className={styles.counter}>
						<button onClick={less}><img src="/assets/article/counter/less.svg"/></button>
						<p>{count}</p>
						<button onClick={more}><img src="/assets/article/counter/more.svg"/></button>
					</div>

				<button className={styles.cartbutton} onClick={handleAddtoCart}>
					<img
						className={styles.cart}
						src="/assets/article/ShoppingCartSimple.svg"
					/>
				</button>
				</div>
			</div>
		</div>
	)
}