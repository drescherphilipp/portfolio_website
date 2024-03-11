import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const SkillEntry = ({ logo, percentage }) => {
    return (
        <div className="item skill-item">

            <div className="progress-container">
                <CircularProgressbar strokeWidth="4" circleRatio={0.8} value={percentage} className='progressBar'
                  styles={buildStyles({
                    rotation: 0.6,
                    pathColor: `#ffffff`,
                    trailColor: '#ffffff80',
                    backgroundColor: '#ffffff',
                  })} />
                <img src={logo} className="skill-image" />
            </div>
        </div>

    );
}
