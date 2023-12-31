import './App.css';
import {Greet} from "./components/Greet";
import {Person} from "./components/Person";
import {PersonList} from "./components/PersonList";
import {Status} from "./components/Status";
import {Heading} from "./components/Heading";
import {Oscar} from "./components/Oscar";
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {Container} from "./components/Conteiner";
import {LoggedIn} from "./components/state/LoggedIn";
import {User} from "./components/state/User";
import {Counter} from "./components/state/Counter";
import {Box} from "./components/context/Box";
import {ThemeContextProvider} from "./components/context/ThemeContext";
import {UserContextProvider} from "./components/context/UserContext";
import {User as CUser} from "./components/context/User"
import {DomRef} from "./components/ref/DomRef";
import {MutableRef} from "./components/ref/MutableRef";
import {Counter as CounterClass} from "./components/class/Counter";
import {Private} from "./components/auth/Private";
import {Profile} from "./components/auth/Profile";
import {List} from "./components/generics/List";
import {RandomNumber} from "./components/restriction/RandomNumber";
import {Toast} from "./components/templateliterals/Toast";
import {CustomButton} from "./components/html/Button";
import {CustomInput} from "./components/html/Input";
import {Text} from "./components/polymorfic/Text";

function App() {
    const personName = {
        first: 'Bruce',
        last: 'Wayne'
    }
    const nameList = [
        {
            first: 'Bruce',
            last: 'Wayne'
        },
        {
            first: 'Clark',
            last: 'Kent'
        },
        {
            first: 'Princess',
            last: 'Diana'
        }
    ]
    return (
    <div className="App">
        <ThemeContextProvider>
            <LoggedIn/>
            <User />
            <Greet name={'Pavel'} isLoggedIn={true}/>
            <Person name={personName}/>
            <PersonList names={nameList}/>
            <Status status={'error'}/>
            <Heading>Placeholder text</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
            </Oscar>
            <Button handleClick={(event, id) => {
                console.log('button click', event, id)
            }}/>
            <Input value={''} handleChange={(event) => {console.log(event)}}/>
            <Container styles={{ border: '1px solid black', padding: '1rem'}}/>
            <Counter/>
            <Box/>
        </ThemeContextProvider>
        <UserContextProvider>
            <CUser/>
        </UserContextProvider>
        <DomRef/>
        <MutableRef/>
        <CounterClass message={'Massage'}/>
        <Private isLoggedIn={true} component={Profile}/>
        <List items={['First', 'Second', 'Third']} onClick={(item) => console.log(item)}/>
        <List items={[1,2,3]} onClick={(item) => console.log(item)}/>
        <List
            items={[
                {
                    id: 1,
                    first: 'Bruce',
                    last: 'Wayne'
                },
                {
                    id: 2,
                    first: 'Bruce2',
                    last: 'Wayne2'
                },
                {
                    id: 3,
                    first: 'Bruce3',
                    last: 'Wayne3'
                },
            ]}
            onClick={(item) => console.log(item)}
        />
        <RandomNumber value={2} isPositive/>
        <Toast position={'center'}/>
        <CustomButton variant={'primary'} onClick = {() => console.log('clicked')}>
            Primary button
        </CustomButton>
        <CustomInput />
        <Text as='h1' size={"lg"}>Heading</Text>
        <Text as='p' size={"md"}>Paragraph</Text>
        <Text as='label' size={"sm"} color={"secondary"} htmlFor={'someId'}>Label</Text>
    </div>
    );
}

export default App;