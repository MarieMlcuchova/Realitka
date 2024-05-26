import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Estate } from '../components/Estate';

const pathname = window.location.pathname.match(/\/(.*?)\.html/)[1];
const response = await fetch('https://apps.kodim.cz/daweb/trening-api/apis/realitka/' + pathname);
const data = await response.json();

document.querySelector('#root').innerHTML = render(
  <>
  <Header />
  <Estate data={data} />
  </>
)
