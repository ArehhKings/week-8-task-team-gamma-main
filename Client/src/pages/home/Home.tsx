import ChartBox from '../../components/chartBox/ChartBox';
import './home.scss';
import TopBox from '../../components/topBox/TopBox';
import { chartBoxAvaliable, chartBoxBongalow, chartBoxConversion, chartBoxDuplet, chartBoxProperty, chartBoxRevenue, chartBoxSold } from '../../data';

const Home = () => {
    return (
        <div className ="home">
           <div className="box box1">
            <TopBox/>
           </div>
           <div className="box box2"><ChartBox {...chartBoxBongalow}/></div>
           <div className="box box3"><ChartBox {...chartBoxDuplet}/></div>
           <div className="box box4"><ChartBox {...chartBoxSold}/></div>
           <div className="box box5"><ChartBox {...chartBoxAvaliable}/></div>
           <div className="box box6"><ChartBox {...chartBoxSold}/></div>
           <div className="box box7"><ChartBox {...chartBoxProperty}/></div>
           <div className="box box8"><ChartBox {...chartBoxProperty}/></div>
           <div className="box box9"><ChartBox {...chartBoxConversion}/></div>
        </div>
    );
}

export default Home;