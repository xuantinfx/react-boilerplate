import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FallbackUI, PrivateRoute } from 'src/components';
import { MainLayout } from 'src/layouts';
import NotFoundPage from 'src/pages/NotFound';
import { RoutePath } from 'src/globals/constants';
import OnlyPublicRoute from './OnlyPublicRoute';
import { OnlyPublicRoutes, PrivateRoutes, PublicRoutes } from './AbtractRootRouter';

function RootRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<FallbackUI />}>
        <MainLayout>
          <Switch>
            {PublicRoutes.map(({ path, component, exact }) => (
              <Route key={path} path={path} component={component} exact={exact} />
            ))}
            {PrivateRoutes.map(({ path, component, exact }) => (
              <PrivateRoute key={path} path={path} component={component} exact={exact} />
            ))}
            {OnlyPublicRoutes.map(({ path, component, exact }) => (
              <OnlyPublicRoute
                key={path}
                path={path}
                component={component}
                exact={exact}
                redirectTo={RoutePath.PROFILE}
              />
            ))}
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  );
}

export default RootRouter;
