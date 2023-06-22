import classNames from "classnames/bind"
import styles from './Logout.module.scss'
import { DefaultLayout } from "../Layout"
const cx = classNames.bind(styles)
const LogOut = () =>{
    return (
        <div className={cx('wrapper')}>
            <DefaultLayout/>
        </div>
    )
}    
export default LogOut