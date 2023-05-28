import "./App.css";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import { PreBuiltUIList, SuperTokensConfig } from "./config";
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import {Dashboard} from "./Dashboard";
import {dataProvider} from "./dataProvider";
import {authProvider} from "./authProvider";
import {UserList} from "./users";
import {PostCreate, PostEdit, PostList} from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import MyLoginPage from "./MyLoginPage";
import authSuperTokenProvider from "./authSuperTokenProvider";

SuperTokens.init(SuperTokensConfig);

function App() {
    return (
        <SuperTokensWrapper>
            {/*<SessionAuth>*/}
            <Admin
                // loginPage={MyLoginPage}
                authProvider={authSuperTokenProvider}
                dataProvider={dataProvider}
                dashboard={Dashboard}
            >
                <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon}/>
                <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
                {/*<Resource name="posts" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />*/}
                {/*<Resource name="comments" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />*/}
            </Admin>
            {/*</SessionAuth>*/}

        </SuperTokensWrapper>
    );
}

export default App;
