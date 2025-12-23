import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="John Doe"
        bio="Full-stack Javascript Developer at Acme inc."
        email="John.doe@example.com"
        phone="+5583981374944"
        githubUrl="https://github.com/johndoe"
        linkedinUrl="https://linkedin.com/in/johndoe"
        twitterUrl="https://twitter.com/johndoe"
      />
    </div>
  );
}