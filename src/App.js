import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';

import { useAuth } from './context/auth';
import { useGetMe } from './queries/auth';
import DefaultLayout from './components/DefaultLayout';

function App() {
  const { data, isFetched } = useGetMe();

  const { setUser } = useAuth();
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [isFetched]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
