import api from '../index';

describe('API', () => {
    it('should get all breeds', async () => { 
        let result = await api.getAllBreeds();
        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Object);
        
    });
    it('should get breed images', async () => { 
        let result = await api.getBreedImages('bulldog');
        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Object);
        
    });
   
})