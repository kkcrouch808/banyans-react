'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import TopMenu from './components/TopMenu';
import CenterText from './components/CenterText';
import BottomFooter from './components/BottomFooter';

export default function Home() {
    return (
        <>
            {/* Add Font Awesome for social icons */}
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
            />
            
            <main>
                <TopMenu />
                <CenterText />
                <BottomFooter />
            </main>
        </>
    );
}