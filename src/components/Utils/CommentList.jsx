export const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    // to format date as "yyyy-mm-dd"
    const formattedDate = date.toLocaleDateString('sv-SE');
    
    // to format time as "hh:mm:ss"  - 24 hour format
    const formattedTime = date.toLocaleTimeString('sv-SE', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }); 

    return `${formattedDate}, kl ${formattedTime}`;
}