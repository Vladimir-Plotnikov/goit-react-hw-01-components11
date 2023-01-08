import PropTypes from 'prop-types'
import css from './Statistics.module.css'


export default function Statistics({title, stats }) {
  return <section class="statistics">
    <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>{stats.map(stat =>
          <li
          key={stat.id}
          style = {{backgroundColor: getRandomHexColor()}}
          className={css.item}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}</span>
    </li>)}
   
  </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
        
    PropTypes.arrayOf({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired
    })
  ).isRequired
};

function getRandomHexColor() {
  return`#${Math.floor(Math.random()*4576103)}`
}


