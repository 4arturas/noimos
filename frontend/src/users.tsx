import { useMediaQuery } from "@mui/material";
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EmailField,
    UrlField,
    useRecordContext,
    Edit,
    SimpleForm, ReferenceInput, TextInput, Create
} from "react-admin";

export const UserList = () => {
    // const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const isSmall = false
    return (
        <List>
            { isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="edit"/>
                    <TextField source="name"/>
                    <TextField source="username"/>
                    <EmailField source="email"/>
                    <TextField source="phone"/>
                    <UrlField source="website"/>
                </Datagrid>
            )
            }
        </List>
    )
}


const UserTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `"${record.title}"` : ''}</span>
}
export const UserEdit = () => (
    <>
        <Edit title={<UserTitle/>}>
            <SimpleForm>
                {/*<ReferenceInput source="userId" reference="users"/>*/}
                <TextInput source="id" disabled/>
                <TextInput source="name"/>
                <TextInput source="username" />
                <TextInput source="email" />
                <TextInput source="phone" />
                <TextInput source="website" />
            </SimpleForm>
        </Edit>
    </>
)

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            {/*<ReferenceInput source="userId" reference="users"/>*/}
            <TextInput source="name"/>
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="website" />
        </SimpleForm>
    </Create>
)