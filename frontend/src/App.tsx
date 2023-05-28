import "./App.css";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { SuperTokensConfig } from "./config";
import { Admin, Resource } from 'react-admin';
import {Dashboard} from "./Dashboard";
import {dataProvider} from "./dataProvider";
import {UserCreate, UserEdit, UserList} from "./users";
import {PostCreate, PostEdit, PostList} from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import authSuperTokenProvider from "./authSuperTokenProvider";

SuperTokens.init(SuperTokensConfig);

function App() {
    return (
        <SuperTokensWrapper>
            <Admin
                authProvider={authSuperTokenProvider}
                dataProvider={dataProvider}
                dashboard={Dashboard}
            >
                <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} recordRepresentation="name" icon={UserIcon}/>
                <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
            </Admin>
        </SuperTokensWrapper>
    );
}

export default App;
