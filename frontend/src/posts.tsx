import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput, Create,
    useRecordContext
} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" reference="users" label="User"/>
];
export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            <EditButton/>
        </Datagrid>
    </List>
);

const PostTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `"${record.title}"` : ''}</span>
}
export const PostEdit = () => (
    <>
    <Edit title={<PostTitle/>}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"/>
            <TextInput source="id" disabled/>
            <TextInput source="title"/>
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Edit>
    </>
)

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"/>
            <TextInput source="title"/>
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Create>
)