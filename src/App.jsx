import Header from './components/Header';
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
    const entryElements = data.map(entry => (
        <Entry 
            img={entry.img}
            destinationName={entry.country}
            destinationLink={entry.googleMapsLink}
            placeName={entry.title}
            date={entry.dates}
            description={entry.text}
            key={entry.id}
        />
    ));

    return (
        <>
            <Header />
            {entryElements}
        </>
    );
}
