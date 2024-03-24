const paginateResults = require('../../utils/pagination');

describe('paginateResults', () => {
  it('should paginate results correctly', () => {
    const results = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
      { id: 6, name: 'Item 6' },
      { id: 7, name: 'Item 7' },
      { id: 8, name: 'Item 8' },
      { id: 9, name: 'Item 9' },
      { id: 10, name: 'Item 10' }
    ];

    const paginatedResults1 = paginateResults(1, 3, results);
    expect(paginatedResults1.results).toHaveLength(3);
    expect(paginatedResults1.results[0].id).toBe(1);
    expect(paginatedResults1.results[1].id).toBe(2);
    expect(paginatedResults1.results[2].id).toBe(3);
    expect(paginatedResults1.previous).toBeUndefined();
    expect(paginatedResults1.next).toEqual({ page: 2, limit: 3 });

 
    const paginatedResults2 = paginateResults(2, 4, results);
    expect(paginatedResults2.results).toHaveLength(4);
    expect(paginatedResults2.results[0].id).toBe(5);
    expect(paginatedResults2.results[1].id).toBe(6);
    expect(paginatedResults2.results[2].id).toBe(7);
    expect(paginatedResults2.results[3].id).toBe(8);
    expect(paginatedResults2.previous).toEqual({ page: 1, limit: 4 });
    expect(paginatedResults2.next).toEqual({ page: 3, limit: 4 });

    const paginatedResults3 = paginateResults(3, 5, results);
    expect(paginatedResults3.results).toHaveLength(5);
    expect(paginatedResults3.results[0].id).toBe(11);
    expect(paginatedResults3.results[1].id).toBe(12);
    expect(paginatedResults3.results[2].id).toBe(13);
    expect(paginatedResults3.results[3].id).toBe(14);
    expect(paginatedResults3.results[4].id).toBe(15);
    expect(paginatedResults3.previous).toEqual({ page: 2, limit: 5 });
    expect(paginatedResults3.next).toEqual({ page: 4, limit: 5 });
  });
});
