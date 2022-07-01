import { Link, Route, Routes } from 'react-router-dom'
import NoteIdentificaiton from './NoteIdentification';



const ExerciseSelect = () => {
    return (
        <div className="exercises">
            <h2>Select an Exercise</h2>
            <div className="links">
                <Link to="/NoteIdentification">Note Identification</Link>
            </div>
            <Routes>
                <Route path="NoteIdentification" element={<NoteIdentificaiton />}></Route>
            </Routes>
        </div>
    )
}

export default ExerciseSelect;