import "./page.module.css";
import Page from './(state)/form/page';
import ListPage from './(state)/list/page';

export default function Home() {
  return (
    <div className="home-container">
      <div className="form-section">
        <Page />
      </div>
      <div className="list-section">
        <ListPage />
      </div>
    </div>
  );
}
