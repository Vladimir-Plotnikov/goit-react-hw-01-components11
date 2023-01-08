import PropTypes from 'prop-types' 


export default function Statistics({title, stats }) {
  return <section class="statistics">
  <h2 class="title">{title}</h2>

      <ul class="stat-list">{stats.map(stat =>
          <li
              key={stat.id}
              class="item">
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}</span>
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
}

