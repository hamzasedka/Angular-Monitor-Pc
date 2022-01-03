import { DisqueService } from './../app/Services/DisqueServices/disque.service';
import { DisqueService as MockDisqueService } from './../app/Services/DisqueServices/disque.mock.service';
import { RamService } from './../app/Services/RamServices/ram.service';
import { RamService as MockRamService } from './../app/Services/RamServices/ram.mock.service';
import { CPUService } from './../app/Services/CPUServices/cpu.service';
import { CPUService as MockCPUService } from './../app/Services/CPUServices/cpu.mock.service';

export const environment = {
  production: true,
  providers: [
    { provider: MockCPUService, useClass: CPUService },
    { provider: MockRamService, useClass: RamService },
    { provider: MockDisqueService, useClass: DisqueService },
  ],
};
