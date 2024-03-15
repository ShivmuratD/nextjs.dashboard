import Image from 'next/image'
import React from 'react'
import styles from "./transactions.module.css"

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src={"/noavatar.png"}
                                    alt=''
                                    width={40}
                                    height={40}
                                    className={styles.userImage} />
                                shiv
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.stauts} ${styles.pending}`} >Pending</span>

                        </td>
                        <td>14.03.20204</td>
                        <td>$53.5</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={"/noavatar.png"}
                                    alt=''
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                shiv1
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Pending</span>
                        </td>
                        <td>14.03.20204</td>
                        <td>$53.5</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={"/noavatar.png"}
                                    alt=''
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                shiv2
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Pending</span>
                        </td>
                        <td>14.03.20204</td>
                        <td>$53.5</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={"/noavatar.png"}
                                    alt=''
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                shiv3
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Pending</span>
                        </td>
                        <td>14.03.20204</td>
                        <td>$53.5</td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default Transactions
