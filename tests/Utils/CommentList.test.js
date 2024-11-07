import { formatDate } from '../../src/components/Utils/CommentList';

describe('formatDate', () => {
    test('should format the date and time correctly', () => {
        const timestamp = '2024-10-09T10:32:05Z';     // UTC timestamp
        const formattedDate = formatDate(timestamp);   // locale timestamp => 2024-10-09 - 12:32:05

        expect(formattedDate).toBe('2024-10-09, kl 12:32:05');
    });
});