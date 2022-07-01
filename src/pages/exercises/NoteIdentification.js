import wholenote from '../../images/Music Note 45.svg'
import staff from '../../images/Music Note 68.svg'
import trebleclef from '../../images/Music Note 59.svg'
import bassclef from '../../images/Music Note 5.svg'
import sharp from '../../images/Music Note 57.svg'
import flat from '../../images/Music Note 1.svg'

const NoteIdentificaiton = () => {
    return (
        <div className="display-note">
            <img className="wholenote" src={wholenote} alt="" />
            <img className="staff" src={staff} alt="" />
            <img className="trebleclef" src={trebleclef} alt="" />
            <img className="bassclef" src={bassclef} alt="" />
            <img className="sharp" src={sharp} alt="" />
            <img className="flat" src={flat} alt="" />
        </div>
    )
}

export default NoteIdentificaiton;