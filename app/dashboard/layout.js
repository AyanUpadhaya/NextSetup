import Link from 'next/link'
import Navigation from './navigation/Navigation';
export default function DashboardLayout({ children }) {
  return (
    <section>
      <Navigation/>
      <div className='p-6'>{children}</div>
    </section>
  );
}
