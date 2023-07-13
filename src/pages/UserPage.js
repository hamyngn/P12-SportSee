import * as React from 'react';
import styles from '../assets/styles/HomePage.module.css'
import {ReactComponent as IconFire} from '../assets/images/fire-solid.svg';
import {ReactComponent as IconDrumStick} from '../assets/images/drumstick-bite-solid.svg';
import {ReactComponent as IconApple} from '../assets/images/apple.svg';
import {ReactComponent as IconBurger} from '../assets/images/cheeseburger.svg';
import PropTypes from 'prop-types'

const UserPage = ({user}) => {
return (
    <div className={styles.container}>
    <h1>Bonjour <span className={styles.name}>{user.userInfos.firstName}</span></h1>
    <p>Félicitation ! Vous avez explosé vos objectifs hier <span role='img' aria-label='claphands'>👏</span></p>    
    <div className= {styles.keyData}>
    <div className={styles.keyContainer}>
        <div className={`${styles.iconContainer} ${styles.fireBg}`}><IconFire className={styles.icon}/></div>
        <div className={styles.flexColumn}>
        <div className={styles.keyText}>{user.keyData.calorieCount}kCal</div>
        <div className={styles.keyDescription}>Calories</div>   
        </div>
    </div>
    <div className={styles.keyContainer}>
        <div className={`${styles.iconContainer} ${styles.drumstickBg}`}><IconDrumStick className={styles.icon}/></div>
        <div className={styles.flexColumn}>
        <div className={styles.keyText}>{user.keyData.proteinCount}g</div>
        <div className={styles.keyDescription}>Proteines</div>
        </div>
    </div>
    <div className={styles.keyContainer}>
        <div className={`${styles.iconContainer} ${styles.appleBg}`}><IconApple className={styles.icon}/></div>
        <div className={styles.flexColumn}>
        <div className={styles.keyText}>{user.keyData.carbohydrateCount}g</div>
        <div className={styles.keyDescription}>Glucides</div>
        </div>
    </div>
    <div className={styles.keyContainer}>
        <div className={`${styles.iconContainer} ${styles.burgerBg}`}><IconBurger className={styles.icon} /></div>
        <div className={styles.flexColumn}>
        <div className={styles.keyText}>{user.keyData.carbohydrateCount}g</div>
        <div className={styles.keyDescription}>Lipides</div>
        </div>
    </div>
    </div>
    </div>
)
}

UserPage.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserPage