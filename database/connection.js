const sql = require('mssql')
import { dbConfig } from '../config/constants'

const connect = async () => {
   try {
      await sql.connect(dbConfig)
      console.log('Connected to database')
      return new sql.Request()
   } catch (err) {
      console.log('Database connection failed!', err)

      return err
   }
}

export default connect