import react from 'react'
import './Hero.css'
export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Don't Code Alone. Find Your Squad.</h1>
                <p>The ultimate platform for students to connect, collaborate, and conquer hackathons and competitions together.</p>
                <div className="hero-buttons">
                    <button className="btn-primary">Create a Team</button>
                    <button className="btn-secondary">Find a Team</button>
                </div>
            </div>
            <div className="hero-image">
                <div className="hero-illustration">
                    <div className="code-editor">
                        <div className="editor-header">
                            <div className="editor-dot dot-red"></div>
                            <div className="editor-dot dot-yellow"></div>
                            <div className="editor-dot dot-green"></div>
                        </div>
                        <div className="code-lines">
                            <div className="code-line" style={{ width: '70%' }}></div>
                            <div className="code-line" style={{ width: '85%' }}></div>
                            <div className="code-line" style={{ width: '60%' }}></div>
                            <div className="code-line" style={{ width: '75%' }}></div>
                            <div className="code-line" style={{ width: '90%' }}></div>
                            <div className="code-line" style={{ width: '65%' }}></div>
                            <div className="code-line" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
