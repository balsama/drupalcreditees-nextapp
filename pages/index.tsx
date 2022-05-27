import type { NextPage } from 'next'

import { CrediteesByMonth } from '../component/CrediteesByMonth';
import { RecentNewCreditees} from "../component/RecentNewCreditees";

const Home: NextPage = () => {
  return (
      <div>
          <h2>New Drupal core creditees by month</h2>
          <CrediteesByMonth />
          <h2>Most recent new creditees</h2>
          <RecentNewCreditees />
      </div>
  )
}

export default Home
