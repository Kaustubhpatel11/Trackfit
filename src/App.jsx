import './App.css';

function App() {
  return (
    <>
      <nav>
        <div className="logo">TrackFit</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Track</li>
          <li>My Workouts</li>
          <li>Login</li>
        </ul>
      </nav>

      <section className="hero">
        <img src="/picture1.jpg" alt="People working out"  className="picture1"/>
        <div className="content">
          <h1>Track your workouts, stay consistent.</h1>
          <p>
            Our platform helps you monitor your fitness journey with ease. Log your sets, reps, and time, and visualize your progress over time.
          </p>
          <ul>
            <li>Log sets, reps, and duration</li>
            <li>Visual progress charts</li>
            <li>Personalized goals</li>
            <li>Daily streak tracker</li>
          </ul>
        </div>
      </section>

      <section className="my-workouts">
        <div className="content">
          <h2>Your Workout Journal</h2>
          <p>
            Save your routines, revisit past sessions, and build consistency. Your entire fitness log, organized and accessible anytime.
          </p>
        </div>
        <img src="/picture2.jpg" alt="Gym workout" className='picture2' />
      </section>
    </>
  );
}

export default App;
