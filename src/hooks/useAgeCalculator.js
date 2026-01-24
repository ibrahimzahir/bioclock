import { useState, useEffect } from 'react';
import { 
    differenceInYears, 
    differenceInMonths, 
    differenceInDays, 
    differenceInWeeks,
    differenceInHours,
    addYears, 
    addMonths,
    format, 
    isValid, 
    parseISO,
    startOfDay,
    isAfter,
    setYear,
    isBefore
} from 'date-fns';

export const useAgeCalculator = (initialDob = '1900-03-04') => {
    const [dob, setDob] = useState(initialDob);
    const [stats, setStats] = useState(null);
    const [nextBirthday, setNextBirthday] = useState(null);

    useEffect(() => {
        if (!dob) return;

        const birthDate = startOfDay(parseISO(dob));
        const today = startOfDay(new Date());

        if (!isValid(birthDate) || isAfter(birthDate, today)) {
            setStats(null);
            setNextBirthday(null);
            return;
        }

        // --- Age Breakdown ---
        const years = differenceInYears(today, birthDate);
        const dateAfterYears = addYears(birthDate, years);
        
        const months = differenceInMonths(today, dateAfterYears);
        const dateAfterMonths = addMonths(dateAfterYears, months);
        
        const days = differenceInDays(today, dateAfterMonths);

        // --- Total Stats ---
        const totalMonths = differenceInMonths(today, birthDate);
        const totalWeeks = differenceInWeeks(today, birthDate);
        const totalDays = differenceInDays(today, birthDate);
        const totalHours = differenceInHours(new Date(), birthDate);

        const dayOfWeek = format(birthDate, 'EEEE');

        setStats({
            years,
            months,
            days,
            dayOfWeek,
            totalDays: totalDays.toLocaleString(),
            totalWeeks: totalWeeks.toLocaleString(),
            totalMonths: totalMonths.toLocaleString(),
            totalHours: totalHours.toLocaleString(),
        });

        // --- Next Birthday ---
        let nextBday = setYear(birthDate, today.getFullYear());
        if (isBefore(nextBday, today)) {
            nextBday = addYears(nextBday, 1);
        }

        const daysToNextBirthday = differenceInDays(nextBday, today);
        const turningAge = years + 1;

        setNextBirthday({
            date: format(nextBday, 'EEEE, MMMM d, yyyy'),
            daysToGo: daysToNextBirthday,
            turningAge
        });

    }, [dob]);

    return { dob, setDob, stats, nextBirthday };
};
