import { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "hooks/init/useLangOfInterface";

// styles
import "react-toastify/dist/ReactToastify.css";
import "styles/index.scss";
import App from "components/App/App";

ReactDOM.render(
  <Suspense fallback={null}>
    <BrowserRouter>
      <App />
      {/* <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider> */}
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
