import React from "react";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { Header } from "@components/Header";
import { Index } from "@views/index";
import { Projects } from "@views/projects";
import { ProjectsId } from "@views/projects/[id]";

const App: React.FC = () => {
  return (
    <Router>
      {/* Header */}
      <Header />
      {/* Routes */}
      <Box p="4">
        <Routes>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projects/:id">
            <ProjectsId />
          </Route>
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
